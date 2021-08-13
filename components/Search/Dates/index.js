import React from "react"
import { DateRangePicker } from "rsuite"

import "../../../styles/Dates.module.css"
import "rsuite/dist/styles/rsuite-default-rtl.css"

export default function Dates() {
  const { beforeToday } = DateRangePicker

  return (
    <div className="searchParts" >
      <DateRangePicker 
        appearance="subtle"
        className="z-1Thousand -mt-2 focus:border-opacity-0 border-0 border-none border-transparent overides"
        format="DD-MM-YYYY"
        disabledDate={beforeToday()}
        placement="bottomStart"
        locale={{
          sunday: "ראשון",
          monday: "שני",
          tuesday: "שלישי",
          wednesday: "רביעי",
          thursday: "חמישי",
          friday: "שישי",
          saturday: "שבת",
          ok: "בחר",
          today: "",
          yesterday: "",
          last7Days: "",
        }}
      />
    </div>
  )
}
