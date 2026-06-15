const Skills = ({ skills }) => {
  return (
    <div className="p-4 bg-yellow-100 rounded shadow">
      <h2 className="font-bold">Skills</h2>
      <ul className="list-disc ml-5">
        {skills.map((skill, index) => (
          <li key={index}>{skill}</li>
        ))}
      </ul>
    </div>
  );
};

export default Skills;