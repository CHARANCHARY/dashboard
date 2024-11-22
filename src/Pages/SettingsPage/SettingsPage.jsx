import Header from "../../components/Header/Header";
import ConnectedAccounts from "../../components/ConnectedAccounts/ConnectedAccounts";
import DangerZone from "../../components/DangerZone/DangerZone";
import Notifications from "../../components/Notifications/Notifications";
import Profile from "../../components/Profile/Profile";
import Security from "../../components/Security/Security";


const SettingsPage = () => {
	
	return (
		<div className='flex-1 overflow-auto relative z-10 bg-gray-900 h-full'>
			<Header title='Settings' />
			<main className='max-w-4xl mx-auto py-6 px-4 lg:px-8'>
				<Profile />
				<Notifications />
				<Security />
				<ConnectedAccounts />
				<DangerZone />
			</main>
		</div>
	);
};
export default SettingsPage;