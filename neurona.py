import numpy as np

class NeuralNetwork():
    def __init__(self):
        np.random.seed(1)
        self.synaptic_weights = 2 * np.random.random((3, 1)) - 1

    def __sigmoid(self, x):
        return 1 / (1 + np.exp(-x))

    def __sigmoid_derivative(self, x):
        return x * (1 - x)

    def train(self, training_set_inputs, training_set_outputs, number_of_training_iterations):
        for iteration in range(number_of_training_iterations):
            output = self.think(training_set_inputs)
            error = training_set_outputs - output
            adjustment = np.dot(training_set_inputs.T, error * self.__sigmoid_derivative(output))
            self.synaptic_weights += adjustment

    def think(self, inputs):
        return self.__sigmoid(np.dot(inputs, self.synaptic_weights))


if __name__ == "__main__":
    neural_network = NeuralNetwork()

    print("Random starting synaptic weights:")
    print(neural_network.synaptic_weights)

    training_set_inputs = np.array([[0, 0, 0], [0, 0, 1], [0, 1, 0], [0, 1, 1]])
    training_set_outputs = np.array([[1, 0, 1, 0]]).T

    neural_network.train(training_set_inputs, training_set_outputs, 10000)

    print("New synaptic weights after training:")
    print(neural_network.synaptic_weights)

    print("Considering new situation [0, 0, 0] -> ?:")
    print(neural_network.think(np.array([0, 0, 0])))

    repeat = True
    while repeat:
        input_values = []
        for i in range(3):
            value = input(f"Introduzca el valor {i+1} (ya sea 1 o 0): ")
            if value not in ('0', '1'):
                print("Introduzca valores de 0 y 1.")
                break
            input_values.append(int(value))
        else:
            input_array = np.array(input_values)

            print("Los valores introducidos fueron:", input_values, "-> ?:")
            output = neural_network.think(input_array)
            if input_values == [0, 0, 0]:
                print("El resultado es: 1")
            else:
                rounded_output = np.round(output)
                print("El resultado es:", int(rounded_output[0]))

            choice = input("¿Desea ingresar nuevos valores? Si (presione 's') No (presione 'n'): ")
            if choice.lower() != 's':
                repeat = False