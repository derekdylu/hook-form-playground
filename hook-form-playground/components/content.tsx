import { useFormContext } from "react-hook-form";
import { FormField } from "@/components/ui/form";
import { Textarea } from "@/components/ui/textarea";
import { FormValues } from './form-values.data';
import { cn } from '@/lib/utils';

const Content = () => {
  const { control, formState: { errors } } = useFormContext<FormValues>()

  return (
    <FormField
      control={control}
      name="content"
      rules={{
        validate: {
          required: (value: string) => {
            if (value.trim().length === 0) {
              return "請輸入至少 5 個字"
            }
          },
          maxLength: (value: string) => value.trim().length <= 1500,
          minLength: (value: string) => value.trim().length >= 5
        }
      }}
      render={({ field }) => (
        <div className="flex flex-col justify-start gap-2">
          <div className="flex flex-row w-full justify-between items-center">
            <label>你的貼文</label>
            <div className="text-sm text-[#777776]"><span className={(field.value?.length > 1500 || (field.value?.length < 5 && field.value?.length > 0)) ? "text-red-500" : ""}>{field.value ? field.value.length : 0}</span>/1500</div>
          </div>
          <Textarea
            className={cn(
              "h-[52px] rounded py-3 px-5 border",
              errors.content ? "border-red-500" : "border-[#CBCCCA]"
            )}
            {...field}
            id="content"
            maxLength={1500}
            minLength={5}
            aria-controls={field.name} aria-describedby={field.name}
            placeholder="如果你正因為信用卡、貸款、投資理財遇到困擾，歡迎在社群蒐集想法及留下你想討論的話題！"
          />
        </div>
      )} />
  )
}

export default Content