// Test file with valid CSS Custom Properties
export const TestComponent = () => {
  return (
    <div style={{ 
      color: "var(--accent)",
      background: "var(--card-background)",
      border: "1px solid var(--border)"
    }}>
      Test content with CSS Custom Properties
    </div>
  );
};
