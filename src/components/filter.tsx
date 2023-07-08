type StaffFormData = {
  id: number | null;
  firstName: string | null;
  lastName: string | null;
  dateOfBirth: string | null;
  function: string | null;
  experience: number | null;
};

import { SubmitHandler, useForm } from 'react-hook-form';

export const Filter = ({
  onFilter,
  onReset,
}: {
  onFilter: (filters: StaffFormData) => Promise<void>;
  onReset: () => void;
}) => {
  const { register, handleSubmit, reset } = useForm<StaffFormData>();

  const onSubmit: SubmitHandler<StaffFormData> = data => {
    const filteredData: StaffFormData = {
      id: data.id || null,
      firstName: data.firstName || null,
      lastName: data.lastName || null,
      dateOfBirth: data.dateOfBirth || null,
      function: data.function || null,
      experience: data.experience || null,
    };
    onFilter(filteredData);
  };

  return (
    <div className="bg-slate-300 text-black p-5 rounded-md">
      <form
        className="mb-2 flex flex-col gap-2 rounded-lg"
        onSubmit={handleSubmit(onSubmit)}
      >
        <div>
          <label htmlFor="id">ID:</label>
          <input
            type="number"
            id="id"
            {...register('id', { valueAsNumber: true })}
          />
        </div>
        <div>
          <label htmlFor="firstName">First Name:</label>
          <input type="text" id="firstName" {...register('firstName')} />
        </div>
        <div>
          <label htmlFor="lastName">Last Name:</label>
          <input type="text" id="lastName" {...register('lastName')} />
        </div>
        <div>
          <label htmlFor="dateOfBirth">Date of Birth:</label>
          <input type="date" id="dateOfBirth" {...register('dateOfBirth')} />
        </div>
        <div>
          <label htmlFor="function">Function:</label>
          <input type="text" id="function" {...register('function')} />
        </div>
        <div>
          <label htmlFor="experience">Experience:</label>
          <input
            type="number"
            id="experience"
            {...register('experience', { valueAsNumber: true })}
          />
        </div>
        <button className="bg-slate-500 w-min p-2 rounded-md" type="submit">
          Filtruj
        </button>
      </form>
      <button
        onClick={() => {
          onReset();
          reset();
        }}
        className="bg-slate-500 w-min p-2 rounded-md"
      >
        Resetuj
      </button>
    </div>
  );
};
