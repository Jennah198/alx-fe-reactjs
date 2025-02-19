<<<<<<< HEAD
const UserProfile = (props) => {
    return (
        <div>
            <h2>{props.name}</h2>
            <p>Age: {props.age}</p>
            <p>Bio: {props.bio}</p>
        </div>
    );
};

export default UserProfile;
=======
function UserProfile(props) {
    return (
      <div style={{ border: '1px solid gray', padding: '10px', margin: '10px', borderRadius: '8px', boxShadow: '2px 2px 10px rgba(0,0,0,0.1)' }}>
        <h2 style={{ color: 'blue', fontSize: '24px', marginBottom: '5px' }}>{props.name}</h2>
        <p>Age: <span style={{ fontWeight: 'bold', color: 'darkred' }}>{props.age}</span></p>
        <p style={{ fontStyle: 'italic', color: 'gray' }}>Bio: {props.bio}</p>
      </div>
    );
  }
  
  export default UserProfile;
  
>>>>>>> 4e648a7 (Applied inline CSS styling to React components)
