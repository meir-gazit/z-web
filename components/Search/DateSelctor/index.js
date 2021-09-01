import React, { useContext } from "react"
import { DateRangePicker } from "rsuite"
import searchContext from '../../../context/SearchContext.js'

export default function DateSelctor() {
	const { setDates } = useContext(searchContext)

	const handleSelect = (ranges) => {
		setDates(ranges)
	}

	const selectionRange = {
		startDate: new Date(),
		endDate: new Date(),
		key: 'selection',
	}

	return (
		<DateRangePicker
			ranges={[selectionRange]}
			onChange={handleSelect}
			appearance="subtle"
			className="z-1Thousand -mt-2 focus:border-opacity-0 border-0 border-none border-transparent overides"
			format="DD-MM-YYYY"
			disabledDate={(value) => { return value < selectionRange.startDate }}
			
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
	)
}