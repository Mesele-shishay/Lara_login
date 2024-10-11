import InputError from '@/Components/InputError';
import InputLabel from '@/Components/InputLabel';
import PrimaryButton from '@/Components/PrimaryButton';
import SelectInput from '@/Components/SelectInput';
import TextInput from '@/Components/TextInput';
import GuestLayout from '@/Layouts/GuestLayout';
import { Head, Link, useForm } from '@inertiajs/react';

export default function Register() {
    const { data, setData, post, processing, errors, reset } = useForm({
        first_name: '',
        last_name: '',
        middle_name: '',
        username: '',
        gender: 'MALE',
        email: '',
        password: '',
        password_confirmation: '',
    });

    const submit = (e) => {
        e.preventDefault();

        console.log(data);

        post(route('register'), {
            onFinish: () => reset('password', 'password_confirmation'),
        });
    };

    return (
        <GuestLayout>
            <Head title="Register" />

            <form onSubmit={submit}>
                <div className='md:grid md:grid-cols-2 gap-4'>
                    <div>
                        <InputLabel htmlFor="first_name" value="First Name" />

                        <TextInput
                            id="first_name"
                            name="first_name"
                            value={data.first_name}
                            className="mt-1 block w-full"
                            autoComplete="first_name"
                            isFocused={true}
                            onChange={(e) => setData('first_name', e.target.value)}
                            required
                            placeholder="First Name"
                        />

                        <InputError message={errors.first_name} className="mt-2" />
                    </div>

                    <div className='mt-4 md:mt-0'>
                        <InputLabel htmlFor="middle_name" value="Middle Name" />

                        <TextInput
                            id="middle_name"
                            name="middle_name"
                            value={data.middle_name}
                            className="mt-1 block w-full"
                            autoComplete="middle_name"

                            onChange={(e) => setData('middle_name', e.target.value)}
                            required
                            placeholder="Middle Name"
                        />

                        <InputError message={errors.middle_name} className="mt-2" />
                    </div>


                    <div className='mt-4'>
                        <InputLabel htmlFor="last_name" value="Last Name" />

                        <TextInput
                            id="last_name"
                            name="last_name"
                            value={data.last_name}
                            className="mt-1 block w-full"
                            autoComplete="last_name"

                            onChange={(e) => setData('last_name', e.target.value)}
                            required
                            placeholder="Last Name"

                        />

                        <InputError message={errors.last_name} className="mt-2" />
                    </div>

                    <div className="mt-4">
                        <InputLabel htmlFor="gender" value="Gender" />
                        <select value={"MALE"} className='py-3 px-4 pe-9 block w-full border-gray-200 rounded-lg text-sm focus:border-blue-500 focus:ring-blue-500 disabled:opacity-50 disabled:pointer-events-none dark:bg-neutral-900 dark:border-neutral-700 dark:text-neutral-400 dark:placeholder-neutral-500 dark:focus:ring-neutral-600' name="gender" onChange={(e) => setData('gender', e.target.value)} required>
                            <option selected value="MALE">Male</option>
                            <option value="FEMALE">Female</option>
                            <option value="Other">Other</option>
                        </select>

                        <InputError message={errors.gender} className="mt-2" />
                    </div>


                    <div className="mt-4 col-span-2">
                        <InputLabel htmlFor="email" value="Email" />

                        <TextInput
                            id="email"
                            type="email"
                            name="email"
                            value={data.email}
                            className="mt-1 block w-full"
                            autoComplete="username"
                            onChange={(e) => setData('email', e.target.value)}
                            required
                            placeholder="Email"

                        />

                        <InputError message={errors.email} className="mt-2" />
                    </div>

                    <div className="mt-4">
                        <InputLabel htmlFor="username" value="User Name" />

                        <TextInput
                            id="username"
                            type="text"
                            name="username"
                            value={data.username}
                            className="mt-1 block w-full"
                            autoComplete="username"
                            onChange={(e) => setData('username', e.target.value)}
                            required
                            placeholder="User Name"

                        />

                        <InputError message={errors.username} className="mt-2" />
                    </div>



                    <div className="mt-4">
                        <InputLabel htmlFor="phone_no" value="Phone Number" />

                        <TextInput
                            id="phone_no"
                            type="text"
                            name="phone_no"
                            value={data.phone_no}
                            className="mt-1 block w-full"
                            autoComplete="phone_no"
                            onChange={(e) => setData('phone_no', e.target.value)}
                            required
                            placeholder="Phone Number"

                        />

                        <InputError message={errors.phone_no} className="mt-2" />
                    </div>


                    <div className="mt-4">
                        <InputLabel htmlFor="password" value="Password" />

                        <TextInput
                            id="password"
                            type="password"
                            name="password"
                            value={data.password}
                            className="mt-1 block w-full"
                            autoComplete="new-password"
                            onChange={(e) => setData('password', e.target.value)}
                            required
                            placeholder="Password"

                        />

                        <InputError message={errors.password} className="mt-2" />
                    </div>

                    <div className="mt-4">
                        <InputLabel
                            htmlFor="password_confirmation"
                            value="Confirm Password"
                        />

                        <TextInput
                            id="password_confirmation"
                            type="password"
                            name="password_confirmation"
                            value={data.password_confirmation}
                            className="mt-1 block w-full"
                            autoComplete="new-password"
                            onChange={(e) =>
                                setData('password_confirmation', e.target.value)
                            }
                            required
                            placeholder="Confirm Password"

                        />

                        <InputError
                            message={errors.password_confirmation}
                            className="mt-2"
                        />
                    </div>

                </div>

                <div>
                    <div className="mt-4 flex items-center justify-end">
                        <Link
                            href={route('login')}
                            className="rounded-md text-sm text-gray-600 underline hover:text-gray-900 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2 dark:text-gray-400 dark:hover:text-gray-100 dark:focus:ring-offset-gray-800"
                        >
                            Already registered?
                        </Link>
                    </div>
                    <div className='flex justify-center'>
                        <PrimaryButton className="ms-4" disabled={processing}>
                            Register
                        </PrimaryButton>
                    </div>

                </div>

            </form>

        </GuestLayout>
    );
}
