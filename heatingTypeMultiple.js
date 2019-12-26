const fieldName = 'Multiple Heating types selected';

const { heating_other } = AppraisalReport;

const fields = [
  'heating_radiant',
  'heating_other',
  'heating_fwa',
  'hwbb_heating'
].map((name) => {
  return { 
    internalName: name, 
    value: AppraisalReport[name] 
  };
});

if (Helpers.isMultipleChecked(fields)) {
	FailWithField(32, fieldName, heating_other);
}