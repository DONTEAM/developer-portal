import { Meteor } from 'meteor/meteor';
import { withTracker } from 'meteor/react-meteor-data';
import ReportView from "../../../components/reports/ReportView";

export default ReportViewContainer = withTracker(props => {
  const reportsHandle = Meteor.subscribe('reportById', props.match.params.id);
  
  const loading = !reportsHandle.ready();
  const reports = UserReports.find({}).fetch();
  
  return {
    loading,
    reports
  };
})(ReportView);