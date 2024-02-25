import { useRef } from 'react'
import {
  KeyboardAvoidingView,
  Platform,
  ScrollView,
  TextInput,
} from 'react-native'

import { Button } from '@/components/Button'
import { Header } from '@/components/Header'
import { LicensePlateInput } from '@/components/LicensePlateInput'
import { TextAreaInput } from '@/components/TextAreaInput'

import * as S from './styles'

const keyboardAvoidingViewBehavior =
  Platform.OS === 'android' ? 'height' : 'position'

export function Departure() {
  const descriptionRef = useRef<TextInput>(null)

  function handleLicensePlate() {
    descriptionRef.current?.focus()
  }

  function handleDepartureRegister() {
    console.log('Ok!')
  }

  return (
    <S.Container>
      <Header title="Saída" />
      <KeyboardAvoidingView
        style={{ flex: 1 }}
        behavior={keyboardAvoidingViewBehavior}
      >
        <ScrollView>
          <S.Content>
            <LicensePlateInput
              label="Placa do veículo"
              placeholder="BRA3003"
              onSubmitEditing={handleLicensePlate}
              returnKeyType="next"
            />
            <TextAreaInput
              ref={descriptionRef}
              label="Finalidade"
              placeholder="Vou utilizar o veículo para..."
              onSubmitEditing={handleDepartureRegister}
              returnKeyType="send"
              blurOnSubmit
            />
            <Button title="Registrar Saída" onPress={handleDepartureRegister} />
          </S.Content>
        </ScrollView>
      </KeyboardAvoidingView>
    </S.Container>
  )
}
