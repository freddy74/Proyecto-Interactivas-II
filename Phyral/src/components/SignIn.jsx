ReactDOM.createRoot(document.getElementById('root')).render(
    <div className="app" style={{
      backgroundImage: `url(${backgroundImage})`,
      backgroundSize: 'cover', backgroundRepeat: 'no-repeat', backgroundPosition: 'center'
    }}>
  
      <div className='align-center grid justify-center gap-10 bg-white w-[50vw] m-auto p-10 rounded-3xl' >
  
      <div className='mt-10 mb-10'>
      <img className='h-full ml-20 ' src={logo} alt="logo" />
      </div>
  
        <h2 className='text-3xl font-main font-bold'>Sign In</h2>
  
        <form className='grid align-center gap-2'>
          <label className='text-xs text-custom-dark font-medium'>Name:</label>
          <input className='w-80 h-8 bg-background-main rounded-[4px]' type="text" placeholder="" />
        </form>
        <form className='grid align-center gap-2'>
          <label className='text-xs text-custom-dark font-medium'>Lastname:</label>
          <input className='w-80 h-8 bg-background-main rounded-[4px]' type="text" placeholder="" />
        </form>
        <form className='grid align-center gap-2'>
          <label className='text-xs text-custom-dark font-medium'>Username:</label>
          <input className='w-80 h-8 bg-background-main rounded-[4px]' type="text" placeholder="" />
        </form>
        <form className='grid align-center gap-2'>
          <label className='text-xs text-custom-dark font-medium'>Password:</label>
          <input className='w-80 h-8 bg-background-main rounded-[4px]' type="text" placeholder="" />
        </form>
        <form className='grid align-center gap-2'>
          <label  className='text-xs text-custom-dark font-medium'>Confirm Password:</label>
          <input className='w-80 h-8 bg-background-main rounded-[4px]' type="text" placeholder="" />
        </form>
  
        <div className='grid gap-4 mb-12'>
          <SimpleButton href="{#}" name="Sign In" />
          <a className='font-main font-semibold text-custom-dark' href="{#}">Have an account?</a>
        </div>
  
  
      </div>
    </div>
  )
  