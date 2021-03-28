const hour = document.getElementsByName('GI_MINUTE934_Seq0H')[0];
const minutes = document.getElementsByName('GI_MINUTE934_Seq0M')[0];
const stayHomeCheck = document.getElementsByName('GI_CHECKBOX936_Seq0')[0];
if (hour) {
    hour.value = document.getElementById('RTTLVAL313H').innerHTML;
}
if (minutes) {
    minutes.value = document.getElementById('RTTLVAL313M').innerHTML;
}
if (stayHomeCheck) {
    stayHomeCheck.checked = true;
}