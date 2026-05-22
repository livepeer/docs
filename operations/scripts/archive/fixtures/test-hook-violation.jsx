// Test file with ThemeData violation
import { ThemeData } from "/snippets/styles/themeStyles.jsx";

export const TestComponent = () => {
  return (
    <div style={{ color: ThemeData.light.accent }}>
      Test content
    </div>
  );
};
