import { useFormContext } from "react-hook-form";
import { FormField } from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { FormValues } from './form-values.data';
import { cn } from '@/lib/utils';

const Title = () => {
  const { control, formState: { errors } } = useFormContext<FormValues>()

  return (
    <FormField
      control={control}
      name="title"
      rules={{
        validate: {
          required: (value: string) => value.trim().length > 0,
          maxLength: (value: string) => value.trim().length <= 30
        }
      }}
      render={({ field }) => (
        <div className="flex flex-col justify-start gap-2">
          <div className="flex flex-row w-full justify-between items-center">
            <label>你的標題</label>
            <div className="text-sm text-[#777776]"><span className={field.value?.length > 30 ? "text-red-500" : ""}>{field.value ? field.value.length : 0}</span>/30</div>
          </div>
          <Input
            className={cn(
              "h-[52px] rounded py-3 px-5 border",
              errors.title ? "border-red-500" : "border-[#CBCCCA]"
            )}
            {...field}
            id="title"
            maxLength={30}
            aria-controls={field.name} aria-describedby={field.name}
            placeholder="填寫標題讓大家更容易知道貼文內容"
          />
        </div>
      )}
    />
  )
}

export default Title;