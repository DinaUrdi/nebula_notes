import { Sparkle } from 'lucide-react';
import { Field } from "./field"
import { InputGroup, InputGroupAddon, InputGroupInput } from "./inputGroup"

type Props = {
  value: string;
  onChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
}

export function InputWithAddon({value, onChange}: Props) {
  return (
    <Field>
      <InputGroup>
        <InputGroupInput id="input-group-url" placeholder="Новая задача..." value={value} onChange={onChange}/>
        <InputGroupAddon align="inline-start">
          <Sparkle/>
        </InputGroupAddon>
      </InputGroup>
    </Field>
  )
}
