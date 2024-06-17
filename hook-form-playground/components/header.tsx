import Image from 'next/image'

const Header = () => {
  return (
    <div className="flex flex-row h-20 w-full items-center justify-between px-[60px] bg-white">
      <Image src="/logo.png" alt="logo" width={144} height={52} />
      <div className="text-[#112858] gap-6 flex flex-row">
        <div>
          交流室
        </div>
        <div>
          信用卡
        </div>
        <div>
          貸款
        </div>
        <div>
          小額借款
        </div>
        <div>
          數位帳戶
        </div>
        <div>
          證券帳戶
        </div>
        <div>
          產險
        </div>
        <div>
          專欄文章
        </div>
        <div>
          帳號
        </div>
      </div>
    </div>
  )
}

export default Header