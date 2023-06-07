function formatName(user) {
  return  user.firtsName + ' ' + user.lastName;
    
  }

  const user ={
    firtsName: 'Jennifer',
    lastName: 'González'
  };

  const ProjectPage = () => {
    
if (user) {
    return <h1>Hello, {formatName(user)} !</h1>;
}
return <h1>Hello People.</h1>;
  }

  export default ProjectPage
