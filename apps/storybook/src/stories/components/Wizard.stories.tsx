import type { Meta } from "@storybook/react";
import { useState } from "react";
import { Wizard } from "@intelation/ui";
import type { WizardStep } from "@intelation/ui";

const meta = {
  title: "Components/Wizard",
  component: Wizard,
  parameters: {
    layout: "padded",
    docs: {
      description: {
        component:
          "A wizard component for multi-step workflows and forms. Wraps the Stepper component to provide step-by-step navigation with progress tracking, validation, and flexible content rendering.",
      },
    },
  },
  tags: ["autodocs"],
} satisfies Meta<typeof Wizard>;

export default meta;

const simpleSteps: WizardStep[] = [
  { id: 1, title: "Account", subtitle: "Create your account" },
  { id: 2, title: "Profile", subtitle: "Personal information" },
  { id: 3, title: "Review", subtitle: "Confirm details" },
];

/**
 * Default wizard with horizontal progress indicator
 */
export const Default = () => {
  const [currentStep, setCurrentStep] = useState(0);
  
  return (
    <Wizard currentStep={currentStep} steps={simpleSteps} onStepChange={setCurrentStep}>
      <Wizard.Step id={1} title="Create Account" description="Enter your email and password">
        <div style={{ marginBottom: "1rem" }}>
          <input type="email" placeholder="Email" style={{ padding: "0.5rem", marginRight: "0.5rem", width: "200px" }} />
          <input type="password" placeholder="Password" style={{ padding: "0.5rem", width: "200px" }} />
        </div>
        <Wizard.Navigation
          onNext={() => setCurrentStep(1)}
          showPrevious={false}
        />
      </Wizard.Step>
      <Wizard.Step id={2} title="Profile Information" description="Tell us about yourself">
        <div style={{ marginBottom: "1rem" }}>
          <input type="text" placeholder="Full Name" style={{ padding: "0.5rem", marginRight: "0.5rem", width: "200px" }} />
          <input type="text" placeholder="Company" style={{ padding: "0.5rem", width: "200px" }} />
        </div>
        <Wizard.Navigation
          onNext={() => setCurrentStep(2)}
          onPrevious={() => setCurrentStep(0)}
        />
      </Wizard.Step>
      <Wizard.Step id={3} title="Review & Confirm" description="Please review before submitting">
        <div style={{ marginBottom: "1rem", background: "#f9fafb", padding: "1rem", borderRadius: "4px" }}>
          <p><strong>Email:</strong> user@example.com</p>
          <p><strong>Name:</strong> John Doe</p>
          <p><strong>Company:</strong> Acme Inc.</p>
        </div>
        <Wizard.Navigation
          onNext={() => alert("Form submitted!")}
          onPrevious={() => setCurrentStep(1)}
          nextLabel="Submit"
        />
      </Wizard.Step>
    </Wizard>
  );
};

/**
 * Wizard with vertical orientation
 */
export const Vertical = () => {
  const [currentStep, setCurrentStep] = useState(0);
  
  return (
    <Wizard currentStep={currentStep} steps={simpleSteps} orientation="vertical" onStepChange={setCurrentStep}>
      <Wizard.Step id={1} title="Account Setup" description="Create your account credentials">
        <button onClick={() => setCurrentStep(1)} style={{ marginTop: "1rem", padding: "0.5rem 1rem" }}>
          Continue
        </button>
      </Wizard.Step>
      <Wizard.Step id={2} title="Profile" description="Add your personal information">
        <div style={{ marginTop: "1rem" }}>
          <button onClick={() => setCurrentStep(0)} style={{ padding: "0.5rem 1rem", marginRight: "0.5rem" }}>
            Back
          </button>
          <button onClick={() => setCurrentStep(2)} style={{ padding: "0.5rem 1rem" }}>
            Next
          </button>
        </div>
      </Wizard.Step>
      <Wizard.Step id={3} title="Review" description="Confirm your details and submit">
        <div style={{ marginTop: "1rem" }}>
          <button onClick={() => setCurrentStep(1)} style={{ padding: "0.5rem 1rem", marginRight: "0.5rem" }}>
            Back
          </button>
          <button onClick={() => alert("Complete!")} style={{ padding: "0.5rem 1rem" }}>
            Finish
          </button>
        </div>
      </Wizard.Step>
    </Wizard>
  );
};

/**
 * Wizard with small size
 */
export const SmallSize = () => {
  const [currentStep] = useState(1);
  
  return (
    <Wizard currentStep={currentStep} steps={simpleSteps} size="sm">
      <Wizard.Step id={1} title="Step 1">
        <p>Compact wizard with small progress indicator.</p>
      </Wizard.Step>
      <Wizard.Step id={2} title="Step 2">
        <p>Current step content.</p>
      </Wizard.Step>
      <Wizard.Step id={3} title="Step 3">
        <p>Final step.</p>
      </Wizard.Step>
    </Wizard>
  );
};

/**
 * Wizard with large size
 */
export const LargeSize = () => {
  const [currentStep] = useState(1);
  
  return (
    <Wizard currentStep={currentStep} steps={simpleSteps} size="lg">
      <Wizard.Step id={1} title="Step 1">
        <p>Large wizard with prominent progress indicator.</p>
      </Wizard.Step>
      <Wizard.Step id={2} title="Step 2">
        <p>Current step content.</p>
      </Wizard.Step>
      <Wizard.Step id={3} title="Step 3">
        <p>Final step.</p>
      </Wizard.Step>
    </Wizard>
  );
};

/**
 * Navigation with different alignment options
 */
export const NavigationAlignment = () => {
  const alignments: Array<"start" | "center" | "end" | "between"> = ["start", "center", "end", "between"];
  
  return (
    <div>
      {alignments.map((align) => (
        <div key={align} style={{ marginBottom: "2rem" }}>
          <h3 style={{ marginBottom: "0.5rem", textTransform: "capitalize" }}>{align}</h3>
          <Wizard currentStep={0} steps={simpleSteps} onStepChange={() => {}}>
            <Wizard.Step id={1} title="Sample Step">
              <p>Navigation buttons aligned to: <strong>{align}</strong></p>
              <Wizard.Navigation
                onNext={() => {}}
                onPrevious={() => {}}
                align={align}
              />
            </Wizard.Step>
          </Wizard>
        </div>
      ))}
    </div>
  );
};

/**
 * Navigation with custom labels and skip button
 */
export const NavigationCustomLabels = () => {
  return (
    <Wizard currentStep={0} steps={simpleSteps} onStepChange={() => {}}>
      <Wizard.Step id={1} title="Optional Step">
        <p>This step can be skipped. Custom labels are used for all buttons.</p>
        <Wizard.Navigation
          onNext={() => alert("Proceeding to next step")}
          onPrevious={() => alert("Going back")}
          onSkip={() => alert("Skipping step")}
          previousLabel="Go Back"
          nextLabel="Continue"
          skipLabel="Skip This"
          showSkip
        />
      </Wizard.Step>
    </Wizard>
  );
};

/**
 * Navigation with loading state
 */
export const NavigationLoading = () => {
  const [isLoading, setIsLoading] = useState(false);
  
  return (
    <Wizard currentStep={0} steps={simpleSteps} onStepChange={() => {}}>
      <Wizard.Step id={1} title="Async Step">
        <p>Click Next to see the loading state simulation.</p>
        <Wizard.Navigation
          onNext={() => {
            setIsLoading(true);
            setTimeout(() => {
              setIsLoading(false);
              alert("Async operation complete!");
            }, 2000);
          }}
          loading={isLoading}
          loadingText="Processing..."
        />
      </Wizard.Step>
    </Wizard>
  );
};

/**
 * Navigation with disabled states
 */
export const NavigationDisabled = () => {
  return (
    <div>
      <div style={{ marginBottom: "2rem" }}>
        <h3>Previous Disabled</h3>
        <Wizard currentStep={0} steps={simpleSteps} onStepChange={() => {}}>
          <Wizard.Step id={1} title="First Step">
            <p>You cannot go back from the first step.</p>
            <Wizard.Navigation
              onNext={() => {}}
              onPrevious={() => {}}
              previousDisabled
            />
          </Wizard.Step>
        </Wizard>
      </div>
      
      <div style={{ marginBottom: "2rem" }}>
        <h3>Next Disabled</h3>
        <Wizard currentStep={0} steps={simpleSteps} onStepChange={() => {}}>
          <Wizard.Step id={1} title="Validation Required">
            <p>The Next button is disabled until validation passes.</p>
            <Wizard.Navigation
              onNext={() => {}}
              onPrevious={() => {}}
              nextDisabled
            />
          </Wizard.Step>
        </Wizard>
      </div>
      
      <div>
        <h3>Skip Disabled</h3>
        <Wizard currentStep={0} steps={simpleSteps} onStepChange={() => {}}>
          <Wizard.Step id={1} title="Required Step">
            <p>This step cannot be skipped.</p>
            <Wizard.Navigation
              onNext={() => {}}
              onPrevious={() => {}}
              onSkip={() => {}}
              showSkip
              skipDisabled
            />
          </Wizard.Step>
        </Wizard>
      </div>
    </div>
  );
};

/**
 * Wizard with synchronous validation
 */
export const ValidationSync = () => {
  const [currentStep, setCurrentStep] = useState(0);
  const [formData, setFormData] = useState({ email: "", password: "" });

  const validateStep = (step: number) => {
    if (step === 0) {
      // Validate email and password
      if (!formData.email || !formData.password) {
        return false;
      }
      if (!formData.email.includes("@")) {
        return false;
      }
      if (formData.password.length < 6) {
        return false;
      }
    }
    return true;
  };

  return (
    <Wizard
      currentStep={currentStep}
      steps={simpleSteps}
      onStepChange={setCurrentStep}
      validateStep={validateStep}
    >
      <Wizard.Step id={1} title="Create Account" description="Enter valid credentials">
        <div style={{ marginBottom: "1rem" }}>
          <div style={{ marginBottom: "0.5rem" }}>
            <label>Email (must include @):</label>
            <br />
            <input
              type="email"
              value={formData.email}
              onChange={(e) => setFormData({ ...formData, email: e.target.value })}
              style={{ padding: "0.5rem", width: "300px" }}
            />
          </div>
          <div>
            <label>Password (min 6 characters):</label>
            <br />
            <input
              type="password"
              value={formData.password}
              onChange={(e) => setFormData({ ...formData, password: e.target.value })}
              style={{ padding: "0.5rem", width: "300px" }}
            />
          </div>
        </div>
        <Wizard.Navigation />
      </Wizard.Step>
      <Wizard.Step id={2} title="Profile">
        <p>Validation passed! You can proceed.</p>
        <Wizard.Navigation />
      </Wizard.Step>
      <Wizard.Step id={3} title="Review">
        <p>Complete!</p>
        <Wizard.Navigation nextLabel="Finish" />
      </Wizard.Step>
    </Wizard>
  );
};

/**
 * Wizard with async validation (simulated API call)
 */
export const ValidationAsync = () => {
  const [currentStep, setCurrentStep] = useState(0);
  const [username, setUsername] = useState("");

  const validateStep = async (step: number) => {
    if (step === 0) {
      // Simulate API call to check username availability
      await new Promise((resolve) => setTimeout(resolve, 1500));
      
      // Simulate validation: username must not be "admin" or "test"
      if (username === "admin" || username === "test") {
        throw new Error("Username already taken");
      }
      if (username.length < 3) {
        return false;
      }
    }
    return true;
  };

  return (
    <Wizard
      currentStep={currentStep}
      steps={simpleSteps}
      onStepChange={setCurrentStep}
      validateStep={validateStep}
      onStepComplete={(step) => console.log(`Step ${step} completed`)}
    >
      <Wizard.Step id={1} title="Choose Username" description="Checking availability...">
        <div style={{ marginBottom: "1rem" }}>
          <label>Username (try "admin" or "test" to see error):</label>
          <br />
          <input
            type="text"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
            style={{ padding: "0.5rem", width: "300px" }}
            placeholder="Min 3 characters"
          />
        </div>
        <Wizard.Navigation loadingText="Checking availability..." />
      </Wizard.Step>
      <Wizard.Step id={2} title="Profile">
        <p>Username <strong>{username}</strong> is available!</p>
        <Wizard.Navigation />
      </Wizard.Step>
      <Wizard.Step id={3} title="Review">
        <p>All set!</p>
        <Wizard.Navigation nextLabel="Create Account" />
      </Wizard.Step>
    </Wizard>
  );
};

/**
 * Wizard with completion callbacks
 */
export const WithCallbacks = () => {
  const [currentStep, setCurrentStep] = useState(0);
  const [completedSteps, setCompletedSteps] = useState<number[]>([]);

  return (
    <div>
      <Wizard
        currentStep={currentStep}
        steps={simpleSteps}
        onStepChange={setCurrentStep}
        validateStep={() => true}
        onStepComplete={(step) => {
          setCompletedSteps([...completedSteps, step]);
        }}
        onWizardComplete={() => {
          alert("Wizard completed successfully!");
        }}
      >
        <Wizard.Step id={1} title="Step 1">
          <p>First step content</p>
          <Wizard.Navigation />
        </Wizard.Step>
        <Wizard.Step id={2} title="Step 2">
          <p>Second step content</p>
          <Wizard.Navigation />
        </Wizard.Step>
        <Wizard.Step id={3} title="Step 3">
          <p>Final step - click Next to complete!</p>
          <Wizard.Navigation nextLabel="Complete" />
        </Wizard.Step>
      </Wizard>

      <div style={{ marginTop: "2rem", padding: "1rem", background: "#f3f4f6", borderRadius: "4px" }}>
        <strong>Completed Steps:</strong> {completedSteps.length > 0 ? completedSteps.join(", ") : "None yet"}
      </div>
    </div>
  );
};
