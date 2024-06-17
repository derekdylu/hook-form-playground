import { useFormContext } from "react-hook-form";
import { FormField } from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { FormValues } from './form-values.data';
import { cn } from '@/lib/utils';

interface VoteProps {
  index: number
  first: boolean
  error: boolean
}

const Vote: React.FC<VoteProps> = ({ index = 0, first = false, error = false }) => {
  const { control } = useFormContext<FormValues>()

  return (
    <FormField
      control={control}
      name={`vote${index + 1}` as "vote1" | "vote2" | "vote3" | "vote4"}
      render={({ field }) => (
        <Input
          className={cn("h-[52px] rounded py-3 px-5 border",
            error ? "border-red-500" : "border-[#CBCCCA]"
          )}
          {...field}
          id={`vote ${field.name}`}
          maxLength={30}
          aria-controls={field.name} aria-describedby={field.name}
          placeholder={first ? `輸入內容來發起投票` : `選項 ${index + 1}`}
        />
      )}
    />
  )
}

export default Vote;