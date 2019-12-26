const fieldName = 'Cooling type other is selected';

const { cooling_other } = AppraisalReport;

if (cooling_other) {
	FailWithField(32, fieldName, cooling_other);
}