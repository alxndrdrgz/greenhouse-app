const LandingPage = ({ user }: { user: any }) => {
  return <>{user && <h1>Welcome! {user}</h1>}</>;
};

export default LandingPage;
