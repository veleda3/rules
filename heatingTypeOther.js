const fieldName = 'Heating type other is selected';

const { heating_other } = AppraisalReport;

if (heating_other) {
	FailWithField(32, fieldName, heating_other);
}