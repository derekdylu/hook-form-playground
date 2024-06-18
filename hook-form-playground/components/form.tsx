"use client"
import { useForm, SubmitHandler, FormProvider } from "react-hook-form"
import Image from "next/image"
import React, { useState, useEffect } from "react"
import { Button } from "@/components/ui/button"
import { FormValues } from './form-values.data';
import Title from './title';
import Content from './content';
import Vote from './vote';
import Selector from './selector';

const Form = () => {
  const methods = useForm<FormValues>({
    defaultValues: {
      title: "",
      content: "",
      vote1: "",
      vote2: "",
      vote3: "",
      vote4: "",
      tags: [], // NOTE: assigning empty instead of empty array to match the type
      creator: "username"
    }
  })

  const onSubmit: SubmitHandler<FormValues> = (data) => {
    const checkVote = watchVotes.filter(op => op?.length > 0).length >= 2
    setCanVote(checkVote);
    if (hasVote && !checkVote) {
      alert("請至少填寫兩個投票選項")
      return
    }
    console.log("SUBMIT!", data)
  }

  const clear = () => {
    methods.reset({
      title: "",
      content: "",
      vote1: "",
      vote2: "",
      vote3: "",
      vote4: "",
      tags: [],
      creator: "username"
    })
  }

  const watchVotes = methods.watch(['vote1', 'vote2', 'vote3', 'vote4'])
  const [hasVote, setHasVote] = useState(false)
  const [canVote, setCanVote] = useState(true)

  useEffect(() => {
    setHasVote(watchVotes.some(op => op?.length > 0));
  }, [watchVotes]);

  const clearVoteOptions = () => {
    methods.setValue('vote1', "")
    methods.setValue('vote2', "")
    methods.setValue('vote3', "")
    methods.setValue('vote4', "")
  }

  return (
    <FormProvider {...methods}>
      <div className="text-[#112858] max-w-[700px] w-full mx-auto px-5 pb-[240px]">
        <form className="flex flex-col w-full gap-5 mt-10">
          <div className="flex flex-row gap-3 items-center">
            <div>
              <Image src="/avatar.jpg" alt="avatar" width={36} height={36} className="rounded-full" />
            </div>
            username
          </div>
          <Title />
          <Content />
          <div className="flex flex-col justify-start gap-2">
            <div className="flex flex-row w-full justify-between items-center">
              <label>發起投票<span className="text-sm text-[#777776] ml-1">(發起投票後無法編輯或刪除)</span></label>
              <Button disabled={!hasVote} type="button" className="rounded-xl px-3 py-1 w-fit h-fit bg-[#DCF0FF] text-[#2567B7] text-sm" onClick={clearVoteOptions}>刪除</Button>
            </div>
            <Vote index={0} first={hasVote ? false : true} error={hasVote && !canVote && watchVotes[0].length === 0} />
            {
              hasVote && (
                <>
                  <Vote index={1} first={false} error={hasVote && !canVote && watchVotes[1].length === 0} />
                  <Vote index={2} first={false} error={hasVote && !canVote && watchVotes[2].length === 0} />
                  <Vote index={3} first={false} error={hasVote && !canVote && watchVotes[3].length === 0} />
                </>
              )
            }
          </div>
          <Selector />
          <div className="flex flex-row w-full justify-between items-center gap-4 mt-4">
            <Button type="button" className="h-[52px] w-full bg-[#E5E5E5] text-black rounded" onClick={clear}>清除</Button>
            <Button type="submit" className="h-[52px] w-full bg-[#112858] text-white rounded" onClick={methods.handleSubmit(onSubmit)}>發布</Button>
          </div>
          <div className="flex flex-col bg-[#f2f2f2] text-sm text-[#777776] px-5 py-3 mt-4">
            1. 明確清楚的內容有助於他人提供精確回應<br />
            2. 建議不要加上敏感個資以保障您的安全
          </div>
        </form>
      </div>
    </FormProvider>
  )
}

export default Form