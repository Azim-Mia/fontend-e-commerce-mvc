const PasswordPage =async({params})=>{
  const currentToken =(await params).token;
 const sliceToken = currentToken.slice(3)
  return (<>
  PasswordPage = {sliceToken}
  <div className ="w-[calc({100vh-80px}] px-4 md:px-8 lg:px-16 xl:px-32 2xl:px-64 flex flex-col gap-3 items-center justify-center text-center mt-24 relative">
<form className="flex flex-col justify-center items-center text-center gap-6 bg-gray rounded-md p-2" >
<lable className="mt-4">New Password :
<input type="text" name="password" placeholder='New Password' />
</lable>
<lable>Confirm Password:
<input type="text" name="password" placeholder='Confirm Password' className="ring-1 ring-black"/>
</lable>
<button type="submit" className="">Submit</button>
</form>
  </div>
  </>)
}
export default PasswordPage;
export async function generateStaticParams(){
    return products.map((data)=>({
      token:token.toString(),
    }));
  };