import NewPassword from '@/components/NewPassword'
const PasswordPage = async({params}) => {
  const token =(await params).token;
  return (<>
  <NewPassword token={token} />
  </>)
};
export default PasswordPage;
export async function generateStaticParams(){
    return [{
      token:"fafhafdhafjfj",
    }]
  };
