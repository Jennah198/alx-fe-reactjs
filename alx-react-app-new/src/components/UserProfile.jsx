const UserProfile = (props) => {
  return (
    <div style={{ border: '2px solid gray', padding: '15px', margin: '15px', borderRadius: '10px', boxShadow: '2px 2px 10px rgba(0,0,0,0.1)', textAlign: 'center' }}>
      <h2 style={{ color: 'blue', fontSize: '1.5em' }}>{props.name}</h2>
      <p style={{ fontSize: '1.2em' }}>Age: <span style={{ fontWeight: 'bold' }}>{props.age}</span></p>
      <p style={{ fontSize: '1.1em', fontStyle: 'italic' }}>Bio: {props.bio}</p>
    </div>
  );
};

export default UserProfile;
