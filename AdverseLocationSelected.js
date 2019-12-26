const fieldName = 'Wood stove is selected';

const { comparables, subject_location } = AppraisalReport;

const isAdverseComparables = comparables.some(item => item.location_comparable && item.location_comparable.chartAt(0) !== 'N' || item.location_comparable.chartAt(0) !== 'B')

const isAdverseSubject = subject_location.chartAt(0) !== 'N' || subject_location.chartAt(0) !== 'B'

if (isAdverseComparables && isAdverseSubject) {
	FailWithField(32, fieldName, has_woodstove);
}