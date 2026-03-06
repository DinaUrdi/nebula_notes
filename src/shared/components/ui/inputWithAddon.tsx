import { Sparkle } from 'lucide-react';
import { Field } from "./field"
import { InputGroup, InputGroupAddon, InputGroupInput } from "./inputGroup"

export function InputWithAddon() {
  return (
    <Field>
      <InputGroup>
        <InputGroupInput id="input-group-url" placeholder="Новая задача..."/>
        <InputGroupAddon align="inline-start">
          <Sparkle/>
        </InputGroupAddon>
      </InputGroup>
    </Field>
  )
}
