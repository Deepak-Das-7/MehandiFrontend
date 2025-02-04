import React, { useState } from 'react';
import { useLoggedUserContext } from '../context/Auth';
import { updateUserProfile } from '../api/auth';

const Profile: React.FC = () => {
    const { user, logout } = useLoggedUserContext();

    // State for profile updates
    const [newName, setNewName] = useState<string>(user?.name || '');
    const [newEmail, setNewEmail] = useState<string>(user?.email || '');
    const [newPhone, setNewPhone] = useState<string>(user?.phone || '');

    // State for password change
    const [password, setPassword] = useState<string>('');
    const [newPassword, setNewPassword] = useState<string>('');
    const [confirmPassword, setConfirmPassword] = useState<string>('');

    // UI States
    const [loading, setLoading] = useState<boolean>(false);
    const [error, setError] = useState<string | null>(null);
    const [success, setSuccess] = useState<string | null>(null);

    // Handle Profile Update (Allows Partial Update)
    const handleProfileUpdate = async () => {
        if (newName === user?.name && newEmail === user.email && newPhone === user.phone) {
            setError('Please update at least one field.');
            return;
        }
        setLoading(true);
        setError(null);
        setSuccess(null);
        try {
            await updateUserProfile(
                user?._id || '',
                newName !== user?.name ? newName : user?.name,
                newEmail !== user?.email ? newEmail : user?.email,
                newPhone !== user?.phone ? newPhone : user?.phone
            );
            setSuccess('Profile updated successfully!');
        } catch (err: any) {
            setError(err.response?.data?.message || 'Failed to update profile');
        } finally {
            setLoading(false);
        }
    };

    // Handle Password Change
    const handlePasswordChange = async () => {
        if (!password || !newPassword || !confirmPassword) {
            setError('All password fields are required.');
            return;
        }

        if (newPassword !== confirmPassword) {
            setError('New passwords do not match.');
            return;
        }

        setLoading(true);
        setError(null);
        setSuccess(null);

        try {
            // await axios.put('/api/users/change-password', {
            //     _id: user._id,
            //     currentPassword: password,
            //     newPassword,
            // });

            setPassword('');
            setNewPassword('');
            setConfirmPassword('');
            setSuccess('Password changed successfully!');
        } catch (err: any) {
            setError(err.response?.data?.message || 'Failed to change password');
        } finally {
            setLoading(false);
        }
    };

    return (
        <div className="container mt-4">
            <h2>Profile</h2>

            {/* Profile Update Section */}
            <div className="card p-4 mt-4">
                <h4>Personal Information</h4>
                {error && <div className="alert alert-danger">{error}</div>}
                {success && <div className="alert alert-success">{success}</div>}

                <div className="mb-3">
                    <label htmlFor="name" className="form-label">Name</label>
                    <input
                        type="text"
                        className="form-control"
                        id="name"
                        value={newName}
                        onChange={(e) => setNewName(e.target.value)}
                    />
                </div>
                <div className="mb-3">
                    <label htmlFor="email" className="form-label">Email</label>
                    <input
                        type="email"
                        className="form-control"
                        id="email"
                        value={newEmail}
                        onChange={(e) => setNewEmail(e.target.value)}
                    />
                </div>
                <div className="mb-3">
                    <label htmlFor="phone" className="form-label">Phone</label>
                    <input
                        type="text"
                        className="form-control"
                        id="phone"
                        value={newPhone}
                        onChange={(e) => setNewPhone(e.target.value)}
                    />
                </div>
                <button className="btn btn-primary" onClick={handleProfileUpdate} disabled={loading}>
                    {loading ? 'Updating...' : 'Update Profile'}
                </button>
            </div>

            {/* Password Change Section */}
            <div className="card p-4 mt-4">
                <h4>Change Password</h4>
                <div className="mb-3">
                    <label htmlFor="password" className="form-label">Current Password</label>
                    <input
                        type="password"
                        className="form-control"
                        id="password"
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                    />
                </div>
                <div className="mb-3">
                    <label htmlFor="newPassword" className="form-label">New Password</label>
                    <input
                        type="password"
                        className="form-control"
                        id="newPassword"
                        value={newPassword}
                        onChange={(e) => setNewPassword(e.target.value)}
                    />
                </div>
                <div className="mb-3">
                    <label htmlFor="confirmPassword" className="form-label">Confirm New Password</label>
                    <input
                        type="password"
                        className="form-control"
                        id="confirmPassword"
                        value={confirmPassword}
                        onChange={(e) => setConfirmPassword(e.target.value)}
                    />
                </div>
                <button className="btn btn-warning" onClick={handlePasswordChange} disabled={loading}>
                    {loading ? 'Changing Password...' : 'Change Password'}
                </button>
            </div>

            {/* Logout Button */}
            <div className="mt-4">
                <button className="btn btn-danger" onClick={logout}>
                    Logout
                </button>
            </div>
        </div>
    );
};

export default Profile;
