const PasswordPage =async({params})=>{
  const currentToken =(await params).token;
 const sliceToken = currentToken.slice(3)
  return (<>
  PasswordPage = {sliceToken}
  </>)
}
export default PasswordPage;