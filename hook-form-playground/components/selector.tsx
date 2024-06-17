
import { useFormContext } from "react-hook-form";
import { FormField } from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { FormValues } from './form-values.data';
import { OPTIONS } from './options.constant';
import MultipleSelector from "@/components/ui/selector"

const Selector = () => {
  const { control } = useFormContext<FormValues>()

  return (
    <FormField
      control={control}
      name="tags"
      render={({ field }) => (
        <div className="flex flex-col justify-start gap-2">
          <label>加入標籤<span className="text-sm text-[#777776] ml-1">(最多 5 個)</span></label>
          <MultipleSelector
            {...field}
            maxSelected={5}
            className="h-[52px] rounded px-3 flex flex-row items-center border border-[#CBCCCA] bg-white whitespace-nowrap	overflow-x-auto" // BUG: no wrapping
            defaultOptions={OPTIONS}
            emptyIndicator={
              <p className="text-center text-lg leading-10 text-gray-600 dark:text-gray-400">
                沒有結果
              </p>
            }
          />
        </div>
      )}
    />
  )
}

export default Selector;


