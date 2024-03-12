import { FC, useState } from "react"

const Auth: FC = () => {
  const [isLogin, setIsLogin] = useState<boolean>(false);
  return (
    <div className="mt-40 flex flex-col items-center justify-center bg-slate-900 text-white">

      <h1 className="mb-10 text-center text-xl">
        { isLogin ? 'შესვლა' : 'რეგისტრაცია' }
      </h1>

      <form className="mx-auto flex w-1/3 flex-col gap-5">
        <input type="text" className="input" placeholder="ელ-ფოსტა" />
        <input type="password" className="input" placeholder="პაროლი" />
        <button className="btn btn-success">
          { isLogin ? 'შესვლა' : 'რეგისტრაცია' }
        </button>
      </form>

      <div className="mt-5 flex justify-center">
        {isLogin ? (
          <button className="text-slate-300 hover:text=white">
            არ გაქვთ ანგარიში ?
          </button>
        ) : (
          <button className="text-slate-300 hover:text=white">
            უკვე გაქვთ ანგარიში ?
          </button>
        )}
      </div>
      
    </div>
  )
}

export default Auth