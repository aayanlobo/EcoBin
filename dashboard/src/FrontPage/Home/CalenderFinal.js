import { Routes, Route, Navigate } from "react-router-dom";

import Calendar from "../../page/calenderwarp";
import moment from "moment";

function CalenderFinal() {
  return (
    <>
      <Routes>
        <Route path="/year/:year/month/:month" element={<Calendar />} />
        <Route path="/" element={<Calendar />} />
      </Routes>
    </>
  );
}

export default CalenderFinal;
