import { Button } from '@/components/Button'
import { Header } from '@/components/Header'
import { LicensePlateInput } from '@/components/LicensePlateInput'
import { TextAreaInput } from '@/components/TextAreaInput'

import * as S from './styles'

export function Departure() {
  return (
    <S.Container>
      <Header title="Saída" />
      <S.Content>
        <LicensePlateInput label="Placa do veículo" placeholder="BRA3003" />
        <TextAreaInput
          label="Finalidade"
          placeholder="Vou utilizar o veículo para..."
        />
        <Button title="Registrar Saída" />
      </S.Content>
    </S.Container>
  )
}
