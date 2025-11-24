import type { Meta, StoryObj } from "@storybook/react";
import { DatePicker } from "@intelation/ui";
import { useState } from "react";

const meta = {
  title: "Forms/DatePicker",
  component: DatePicker,
  parameters: {
    layout: "centered",
    docs: {
      description: {
        component:
          "Date picker component with calendar UI for selecting dates. Features include month navigation, min/max date constraints, custom date formatting, clearable option, and full accessibility support. Built with date-fns for reliable date manipulation.",
      },
    },
  },
  tags: ["autodocs"],
  argTypes: {
    value: {
      control: false,
      description: "Selected date (controlled mode)",
    },
    defaultValue: {
      control: false,
      description: "Initial selected date (uncontrolled mode)",
    },
    onChange: {
      action: "changed",
      description: "Callback fired when date changes",
    },
    minDate: {
      control: false,
      description: "Minimum selectable date",
    },
    maxDate: {
      control: false,
      description: "Maximum selectable date",
    },
    dateFormat: {
      control: "text",
      description: "Date format string (date-fns format)",
    },
    placeholder: {
      control: "text",
      description: "Placeholder text when no date selected",
    },
    disabled: {
      control: "boolean",
      description: "Whether the date picker is disabled",
    },
    clearable: {
      control: "boolean",
      description: "Whether to show clear button",
    },
  },
} satisfies Meta<typeof DatePicker>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    placeholder: "Select date",
  },
};

export const WithSelectedDate: Story = {
  args: {
    defaultValue: new Date(2025, 0, 15),
  },
};

export const WithMinMaxDates: Story = {
  args: {
    minDate: new Date(2025, 0, 1),
    maxDate: new Date(2025, 0, 31),
    placeholder: "Select date in January 2025",
  },
};

export const Clearable: Story = {
  args: {
    defaultValue: new Date(2025, 0, 15),
    clearable: true,
  },
};

export const Disabled: Story = {
  args: {
    defaultValue: new Date(2025, 0, 15),
    disabled: true,
  },
};

export const CustomFormat: Story = {
  args: {
    defaultValue: new Date(2025, 0, 15),
    dateFormat: "yyyy-MM-dd",
    placeholder: "YYYY-MM-DD",
  },
};

export const EuropeanFormat: Story = {
  args: {
    defaultValue: new Date(2025, 0, 15),
    dateFormat: "dd/MM/yyyy",
    placeholder: "DD/MM/YYYY",
  },
};

export const LongFormat: Story = {
  args: {
    defaultValue: new Date(2025, 0, 15),
    dateFormat: "MMMM d, yyyy",
    placeholder: "Select date",
  },
};

export const FutureDatesOnly: Story = {
  args: {
    minDate: new Date(),
    placeholder: "Select a future date",
  },
};

export const PastDatesOnly: Story = {
  args: {
    maxDate: new Date(),
    placeholder: "Select a past date",
  },
};

export const CurrentMonthOnly: Story = {
  args: {
    minDate: new Date(new Date().getFullYear(), new Date().getMonth(), 1),
    maxDate: new Date(new Date().getFullYear(), new Date().getMonth() + 1, 0),
    placeholder: "Select date in current month",
  },
};

export const CustomPlaceholder: Story = {
  args: {
    placeholder: "Pick your birthday",
  },
};

export const Controlled: Story = {
  render: () => {
    const [date, setDate] = useState<Date | null>(null);

    return (
      <div style={{ display: "flex", flexDirection: "column", gap: "1rem", alignItems: "flex-start" }}>
        <DatePicker
          value={date}
          onChange={setDate}
          placeholder="Select date"
          clearable
        />
        <div style={{ display: "flex", gap: "0.5rem" }}>
          <button
            onClick={() => setDate(new Date())}
            style={{
              padding: "0.5rem 1rem",
              background: "var(--color-primary)",
              color: "white",
              border: "none",
              borderRadius: "4px",
              cursor: "pointer",
            }}
          >
            Set to Today
          </button>
          <button
            onClick={() => setDate(null)}
            style={{
              padding: "0.5rem 1rem",
              background: "var(--color-border-primary)",
              color: "white",
              border: "none",
              borderRadius: "4px",
              cursor: "pointer",
            }}
          >
            Clear
          </button>
        </div>
        <p style={{ margin: 0 }}>
          Selected: {date ? date.toLocaleDateString() : "None"}
        </p>
      </div>
    );
  },
};

export const DateRangeSelection: Story = {
  render: () => {
    const [startDate, setStartDate] = useState<Date | null>(null);
    const [endDate, setEndDate] = useState<Date | null>(null);

    const resetRange = () => {
      setStartDate(null);
      setEndDate(null);
    };

    return (
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          gap: "1rem",
          padding: "1.5rem",
          background: "var(--color-background-white)",
          border: "1px solid var(--color-border-primary)",
          borderRadius: "8px",
          minWidth: "400px",
        }}
      >
        <h3 style={{ margin: 0 }}>Date Range</h3>
        <div style={{ display: "flex", gap: "1rem", alignItems: "center" }}>
          <div style={{ flex: 1 }}>
            <label style={{ display: "block", marginBottom: "0.5rem", fontSize: "0.875rem" }}>
              Start Date
            </label>
            <DatePicker
              value={startDate}
              onChange={setStartDate}
              maxDate={endDate || undefined}
              placeholder="Start date"
              clearable
            />
          </div>
          <div style={{ marginTop: "1.5rem" }}>→</div>
          <div style={{ flex: 1 }}>
            <label style={{ display: "block", marginBottom: "0.5rem", fontSize: "0.875rem" }}>
              End Date
            </label>
            <DatePicker
              value={endDate}
              onChange={setEndDate}
              minDate={startDate || undefined}
              placeholder="End date"
              clearable
            />
          </div>
        </div>
        <button
          onClick={resetRange}
          style={{
            padding: "0.5rem 1rem",
            background: "var(--color-border-primary)",
            color: "white",
            border: "none",
            borderRadius: "4px",
            cursor: "pointer",
          }}
        >
          Reset Range
        </button>
        {startDate && endDate && (
          <p style={{ margin: 0, fontSize: "0.875rem" }}>
            Selected range: {startDate.toLocaleDateString()} - {endDate.toLocaleDateString()}
          </p>
        )}
      </div>
    );
  },
};

export const BookingForm: Story = {
  render: () => {
    const [checkIn, setCheckIn] = useState<Date | null>(null);
    const [checkOut, setCheckOut] = useState<Date | null>(null);

    const today = new Date();
    const minCheckOut = checkIn
      ? new Date(checkIn.getTime() + 24 * 60 * 60 * 1000)
      : undefined;

    return (
      <div
        style={{
          width: "400px",
          padding: "1.5rem",
          background: "var(--color-background-white)",
          border: "1px solid var(--color-border-primary)",
          borderRadius: "8px",
        }}
      >
        <h3 style={{ margin: "0 0 1.5rem 0" }}>Hotel Booking</h3>
        <div style={{ display: "flex", flexDirection: "column", gap: "1rem" }}>
          <div>
            <label style={{ display: "block", marginBottom: "0.5rem", fontWeight: "500" }}>
              Check-in Date *
            </label>
            <DatePicker
              value={checkIn}
              onChange={setCheckIn}
              minDate={today}
              placeholder="Select check-in date"
              clearable
            />
          </div>
          <div>
            <label style={{ display: "block", marginBottom: "0.5rem", fontWeight: "500" }}>
              Check-out Date *
            </label>
            <DatePicker
              value={checkOut}
              onChange={setCheckOut}
              minDate={minCheckOut}
              disabled={!checkIn}
              placeholder={checkIn ? "Select check-out date" : "Select check-in first"}
              clearable
            />
          </div>
          {checkIn && checkOut && (
            <div
              style={{
                padding: "0.75rem",
                background: "var(--color-background-secondary)",
                borderRadius: "4px",
                fontSize: "0.875rem",
              }}
            >
              <strong>Duration:</strong>{" "}
              {Math.ceil((checkOut.getTime() - checkIn.getTime()) / (1000 * 60 * 60 * 24))} nights
            </div>
          )}
          <button
            disabled={!checkIn || !checkOut}
            style={{
              padding: "0.75rem",
              background: checkIn && checkOut ? "var(--color-primary)" : "var(--color-border-primary)",
              color: "white",
              border: "none",
              borderRadius: "4px",
              cursor: checkIn && checkOut ? "pointer" : "not-allowed",
              fontSize: "1rem",
            }}
          >
            Book Now
          </button>
        </div>
      </div>
    );
  },
};

export const BirthdayPicker: Story = {
  args: {
    maxDate: new Date(),
    placeholder: "Select your birthday",
    dateFormat: "MMMM d, yyyy",
  },
};

export const AppointmentScheduler: Story = {
  render: () => {
    const [appointment, setAppointment] = useState<Date | null>(null);

    const today = new Date();
    const oneMonthFromNow = new Date(today.getFullYear(), today.getMonth() + 1, today.getDate());

    return (
      <div
        style={{
          width: "400px",
          padding: "1.5rem",
          background: "var(--color-background-white)",
          border: "1px solid var(--color-border-primary)",
          borderRadius: "8px",
        }}
      >
        <h3 style={{ margin: "0 0 0.5rem 0" }}>Schedule Appointment</h3>
        <p style={{ margin: "0 0 1.5rem 0", fontSize: "0.875rem", color: "var(--color-text-tertiary)" }}>
          Select an appointment date within the next 30 days
        </p>
        <DatePicker
          value={appointment}
          onChange={setAppointment}
          minDate={today}
          maxDate={oneMonthFromNow}
          placeholder="Select appointment date"
          clearable
        />
        {appointment && (
          <div style={{ marginTop: "1rem", padding: "1rem", background: "var(--color-background-secondary)", borderRadius: "4px" }}>
            <p style={{ margin: 0, fontSize: "0.875rem" }}>
              <strong>Appointment scheduled for:</strong>
              <br />
              {appointment.toLocaleDateString("en-US", {
                weekday: "long",
                year: "numeric",
                month: "long",
                day: "numeric",
              })}
            </p>
          </div>
        )}
      </div>
    );
  },
};

export const AllFormats: Story = {
  render: () => {
    const date = new Date(2025, 0, 15);

    return (
      <div style={{ display: "flex", flexDirection: "column", gap: "1rem", minWidth: "300px" }}>
        <div>
          <label style={{ display: "block", marginBottom: "0.5rem", fontSize: "0.875rem" }}>
            US Format (MM/DD/YYYY)
          </label>
          <DatePicker defaultValue={date} dateFormat="MM/dd/yyyy" />
        </div>
        <div>
          <label style={{ display: "block", marginBottom: "0.5rem", fontSize: "0.875rem" }}>
            European Format (DD/MM/YYYY)
          </label>
          <DatePicker defaultValue={date} dateFormat="dd/MM/yyyy" />
        </div>
        <div>
          <label style={{ display: "block", marginBottom: "0.5rem", fontSize: "0.875rem" }}>
            ISO Format (YYYY-MM-DD)
          </label>
          <DatePicker defaultValue={date} dateFormat="yyyy-MM-dd" />
        </div>
        <div>
          <label style={{ display: "block", marginBottom: "0.5rem", fontSize: "0.875rem" }}>
            Long Format
          </label>
          <DatePicker defaultValue={date} dateFormat="MMMM d, yyyy" />
        </div>
        <div>
          <label style={{ display: "block", marginBottom: "0.5rem", fontSize: "0.875rem" }}>
            Short Format
          </label>
          <DatePicker defaultValue={date} dateFormat="MMM d, yy" />
        </div>
      </div>
    );
  },
};
