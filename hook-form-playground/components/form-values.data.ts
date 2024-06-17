import { Option } from './ui/selector';

export interface FormValues {
  title: string
  content: string
  vote1: string
  vote2: string
  vote3: string
  vote4: string
  tags: Option[]
  creator: string
}