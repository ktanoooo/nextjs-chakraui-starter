import styled from 'styled-components'
import { Button, Input, Switch, Textarea, Radio, Checkbox } from '@/themes/components/Forms'

export const TopPage = () => (
  <>
    <Div>Top Page</Div>
    <Button>Button</Button>
    <Input />
    <Textarea />
    <Switch />
    <Radio />
    <Checkbox />
  </>
)

const Div = styled.div`
  color: red;
`
