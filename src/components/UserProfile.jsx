const UserProfile = (props) => {
    return (
        <div style={{ border: '1px solid gray', padding: '10px', margin: '10px', borderRadius: '5px' }}>
            <h2 style={{ color: 'blue', fontSize: '24px' }}>{props.name}</h2>
            <p>Age: <span style={{ fontWeight: 'bold', color: 'green' }}>{props.age}</span></p>
            <p>Bio: <span style={{ fontStyle: 'italic' }}>{props.bio}</span></p>
        </div>
    );
};

export default UserProfile;