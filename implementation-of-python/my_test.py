import unittest

class Solution:
    def __init__(self):
        self.stack = []
        
    def isValid(self, s):
        """
        :type s: str
        :rtype: bool
        """
        dict = {"(":")", "[":"]", "{":"}"}
        assert isinstance(s, str), 'Should input an string.'
        for item in s:
            if item in dict.keys():
                self.stack.append(item)
            elif item in dict.values():
                if self.stack == [] or dict[self.stack.pop()] is not item:
                    return False
            else:
                return False
        return self.stack == []

class SolutionTestCase(unittest.TestCase):
    def setUp(self):
        self.solution = Solution()
    
    def tearDown(self):
        self.solution = None

    def test_case_one(self):
        input = "()"
        self.assertTrue(self.solution.isValid(input))

    def test_case_two(self):
        input = '()[]{}'
        self.assertTrue(self.solution.isValid(input))

    def test_case_three(self):
        input = '([)]'
        self.assertFalse(self.solution.isValid(input))

    def test_case_four(self):
        input = '(]'
        self.assertFalse(self.solution.isValid(input))

    def test_case_five(self):
        input = '{[()]}'
        self.assertTrue(self.solution.isValid(input))

if __name__ == "__main__":
    unittest.main()


# from operator import add

# def square(value):
#     return value**2

# def cube(value):
#     return value**3

# def main(value):
#     return add(square(value), cube(value))


# import unittest
# from unittest import mock

# class CalculationTestCase(unittest.TestCase):
#     def test_square(self):
#         self.assertEqual(square(2), 4)

#     def test_cube(self):
#         self.assertEqual(cube(2), 8)

#     # @mock.patch('__main__.square', return_value=4)
#     # @mock.patch('__main__.cube', return_value=8)
#     # def test_main(self, mock_square, mock_cube):
#     #     self.assertEqual(main(2), 12)
#     #     mock_square.assert_called_once_with(2)
#     #     mock_cube.assert_called_once_with(2)

#     def test_main(self):
#         with mock.patch('__main__.square', return_value=4) as mock_square,\
#             mock.patch('__main__.cube', return_value=8) as mock_cube:
#             # mock_square.return_value = 4
#             self.assertEqual(main(2), 12)
#             mock_square.assert_called_once_with(2)
#             mock_cube.assert_called_once_with(2)

# if __name__ == '__main__':
#     unittest.main()
