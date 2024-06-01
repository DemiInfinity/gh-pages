import { useState } from 'react';
import { Switch } from '@headlessui/react'; // Ensure you have Headless UI installed for the Switch component

interface ToggleButtonProps {
  elemId: string;
  initialStatus: 'pending' | 'active';
  onToggle: (isActive: boolean) => void;
}

function ToggleButton({ elemId, initialStatus, onToggle }: ToggleButtonProps) {
  const [status, setStatus] = useState(initialStatus);

  const toggleChange = () => {
    const newStatus = status === 'pending' ? 'active' : 'pending';
    setStatus(newStatus);
    onToggle(newStatus === 'active');
  };

  return (
    <Switch
      checked={status === 'active'}
      onChange={toggleChange}
      className={`${
        status === 'active' ? 'bg-blue-600' : 'bg-gray-200'
      } relative inline-flex items-center h-6 rounded-full w-11`}
    >
      <span className="sr-only">Toggle status</span>
      <span
        className={`${
          status === 'active' ? 'translate-x-6' : 'translate-x-1'
        } inline-block w-4 h-4 transform bg-white rounded-full`}
      />
    </Switch>
  );
}

export default ToggleButton;
