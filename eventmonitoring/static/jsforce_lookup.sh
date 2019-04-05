ID="$1"
source ~/.bashrc

jsforce_prod -e "query(\"select DeveloperName from Dashboard where Id = '$ID'\")" | jq '.records[].DeveloperName'
