function Profile({ name, profession, age }) {
  return (
    <div className="profile">
      <h2>{name}</h2>
      <p>Profession: {profession}</p>
      <p>Age: {age}</p>
    </div>
  );
}

export default Profile;