const user ={
    name: 'Jennifer González',
    imageUrl: 'https://cdn-3.expansion.mx/dims4/default/114b712/2147483647/strip/true/crop/1200x675+0+0/resize/3600x2026!/format/webp/quality/80/?url=https%3A%2F%2Fcdn-3.expansion.mx%2F62%2Ffe%2F113e2a344a17858d22afec7fb9b7%2Fdia-internacional-del-gato.jpg',
    imageSize: 500,
};



export default function Profile() {
  return (
    <>
    <h1>{user.name}</h1>
    <img 
     className="avatar"
     src={user.imageUrl}
     alt={'Photo of' + user.name} 
      style={{
        width: user.imageSize
      }}
      />
      </>
  );
    
}

