const fieldName = 'Wood stove is selected';

const { has_woodstove } = AppraisalReport;

if (has_woodstove) {
	FailWithField(32, fieldName, has_woodstove);
}