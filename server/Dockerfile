FROM python

# Set working directory
USER 0

# COPY ./requirements.txt /app/requirements.txt
COPY . /app
WORKDIR /app

RUN pip install -r requirements.txt


ENTRYPOINT [ "python" ]

CMD [ "certifications/endpoint.py" ]