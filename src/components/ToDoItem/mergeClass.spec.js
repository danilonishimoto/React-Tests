import mergeClass from "./MergeClass";

describe("mergeClass.js", () => {
  test("Deveria retornar a classe base do todo-item quando o item não estiver completo", () => {
    // Arrange
    const isItemCompleted = false;

    // Act
    const styles = mergeClass(isItemCompleted);

    // Assert
    expect(styles).toBe("todo-item");
  });
  test("Deveria retornar a classe base do todo-item quando o item não estiver completo", () => {
	  // Arrange
    const isItemCompleted = true;

    // Act
    const styles = mergeClass(isItemCompleted);

    // Assert
    expect(styles).toBe("todo-item completed");
  })
});