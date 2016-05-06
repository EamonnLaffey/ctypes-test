# ctypes-test

The Firefox jpm extension ctypes-test-ext attempts to open the dll operations.dll. It then tries to call the c function `do_operation()`.

do_operation() simply calls the function `do_supporting()` defined in supporting.dll. `do_supporting()` prints: "DOING SUPPORTING". Then `do_operation()` prints: "DOING OPERATION"

test.exe calls `do_operation()` to verify that DOING SUPPORTING and DOING OPERATION are printed to std out.

`ctypes.open()` within the Firefox extension fails to load operations.dll with the error code 126. However, if operations.dll does not depend on supporting.dll then Firefox can successfully open the dll and call `do_operation()`.
