const fieldInternalName = 'attic_finished';
const fieldName = 'Attic finished is selected';
const fieldName2 = 'Attic heated is selected';

const { attic_finished, attic_heated } = AppraisalReport;

if (attic_finished) {
	FailWithField(32, fieldName, attic_finished);
}

if (attic_heated) {
	FailWithField(32, fieldName2, attic_heated);
}
