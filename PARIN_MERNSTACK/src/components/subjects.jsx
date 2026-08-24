function studentCard({ subjectCode, subjectName, classSchedule}) {
  return (
    <div className="bg-white p-6 rounded-xl shadow-lg">
      <h2 className="text-xl font-bold text-pink-600">Subject Name: {subjectName}</h2>
      <p className="text-slate-500">Subject Code: {subjectCode}</p>
      <p className="text-slate-500">class Schedule: {classSchedule}</p>

    </div>
  );
}

export default studentCard;