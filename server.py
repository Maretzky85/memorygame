from flask import Flask, render_template, request
app = Flask(__name__)


default_x = [1, 2, 3, 4, 5, 6, 7, 8]
default_y = [2, 4, 6, 8]


@app.route("/", methods = ["GET"])
def main_page():
    return render_template("welcome.html", x=default_x, y=default_y)


def main():
    app.run(debug=True)


if __name__ == '__main__':
    main()
