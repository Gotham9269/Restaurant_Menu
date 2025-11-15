export default function Body(data) {
  return (
    <div className="recipe-body">
      <div className="content">
        <p><strong>Serves:</strong> {data.Serves}</p>
        <p><strong>Difficulty:</strong> {data.Difficulty}</p>
        <p><strong>Type:</strong> {data.Type}</p>
      </div>
      <img className="img"
      src={data.image}
      />
    </div>
  )
}